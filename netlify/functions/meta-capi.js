exports.handler = async function (event) {
    const allowedOrigin = process.env.ALLOWED_ORIGIN || '*';

    const headers = {
        'Access-Control-Allow-Origin': allowedOrigin,
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 204,
            headers,
            body: ''
        };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({
                success: false,
                error: 'Método não permitido. Use POST.'
            })
        };
    }

    const pixelId = process.env.META_PIXEL_ID;
    const accessToken = process.env.META_ACCESS_TOKEN;
    const apiVersion = process.env.META_API_VERSION || 'v23.0';
    const testEventCode = process.env.META_TEST_EVENT_CODE;

    if (!pixelId || !accessToken) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                success: false,
                error: 'META_PIXEL_ID ou META_ACCESS_TOKEN não configurados na Netlify.'
            })
        };
    }

    let body;

    try {
        body = JSON.parse(event.body || '{}');
    } catch (error) {
        return {
            statusCode: 400,
            headers,
            body: JSON.stringify({
                success: false,
                error: 'JSON inválido no corpo da requisição.'
            })
        };
    }

    const {
        event_name,
        event_id,
        event_source_url,
        event_data = {},
        fbp,
        fbc
    } = body;

    if (!event_name || !event_id || !event_source_url) {
        return {
            statusCode: 400,
            headers,
            body: JSON.stringify({
                success: false,
                error: 'Campos obrigatórios ausentes: event_name, event_id ou event_source_url.'
            })
        };
    }

    const userAgent = event.headers['user-agent'] || '';
    const clientIp =
        event.headers['x-nf-client-connection-ip'] ||
        event.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
        '';

    const user_data = {};

    if (userAgent) {
        user_data.client_user_agent = userAgent;
    }

    if (clientIp) {
        user_data.client_ip_address = clientIp;
    }

    if (fbp) {
        user_data.fbp = fbp;
    }

    if (fbc) {
        user_data.fbc = fbc;
    }

    const payload = {
        data: [
            {
                event_name: event_name,
                event_time: Math.floor(Date.now() / 1000),
                action_source: 'website',
                event_id: event_id,
                event_source_url: event_source_url,
                user_data: user_data,
                custom_data: event_data
            }
        ]
    };

    if (testEventCode) {
        payload.test_event_code = testEventCode;
    }

    const metaUrl = `https://graph.facebook.com/${apiVersion}/${pixelId}/events?access_token=${encodeURIComponent(accessToken)}`;

    try {
        const response = await fetch(metaUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const metaResponse = await response.json();

        if (!response.ok) {
            return {
                statusCode: 502,
                headers,
                body: JSON.stringify({
                    success: false,
                    error: 'Erro retornado pela Meta.',
                    metaResponse
                })
            };
        }

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                event_name,
                event_id,
                metaResponse
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                success: false,
                error: 'Erro ao enviar evento para a Meta.',
                details: error.message
            })
        };
    }
};