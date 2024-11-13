import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
    try {
        // Extraindo o corpo da requisição em formato JSON
        const body = await request.json();

        // URL do servidor de envio de email
        const url = 'https://delipe-mail-907e570e0648.herokuapp.com/send-mail';

        // Preparando os dados do email
        const emailData = {
            from: "'Formulário | Velonet Descuento' <sites@delipe.com.br>",
            email: "internet@velonet.co",
            subject: "Formulário de contato | Site",
            text: `Celular: ${body.phone}`,
            smtp: 'YjI5NmU3ZTA0Y2RkMGYxMTMwNWVjNjMwYmMxMzg1ODNhMTNhYWQ0M2IzODZlNDc2Njg2NGU2NjE1NzU5NWI3MDQyMTAzZDcyYmJjNzg2ZGQ2YmE4YTA4N2EwZjVhNmIxYWM3ZTgwNmFhMThjYjEwMjRkY2E2NTlmYmE0OTk5NDQwNzA2ZDY3NDMxYmNlYjUwYmRlODFjNTZlOTgzMWVjYTllM2ZlODFjNTIyOTFlYzNmYWUyNjAzOWI3YmViYmIzNzI0MjJjMzYzMTQ3MDA0ZGQzMTI4NTk0YWU0NTc1ZjY='
        };

        // Enviando o email
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData)
        });

        // Verificação da resposta do envio de email
        if (!response.ok) {
            throw new Error('Erro ao enviar o email');
        }

        // Se o envio for bem-sucedido, retorna um status de sucesso
        return new Response(
            JSON.stringify({ message: 'Email enviado com sucesso!' }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Erro ao processar a requisição:', error);

        // Retorna um status de erro caso ocorra alguma falha
        return new Response(
            JSON.stringify({ error: 'Falha ao processar o pedido' }),
            { status: 500 }
        );
    }
};