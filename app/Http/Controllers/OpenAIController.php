<?php

namespace App\Http\Controllers;

use App\Exceptions\OpenAIRequestException;
use GuzzleHttp\Client;

class OpenAIController extends Controller
{
    /**
     * Send a request to the OpenAI API.
     *
     * @return array
     */
    public function sendRequest(string $newMessage, array $messageHistory)
    {
        $client = new Client();

        try {
            $response = $client->post('https://api.openai.com/v1/chat/completions', [
                'headers' => $this->getHeaders(),
                'json' => [
                    'model' => 'gpt-4',
                    'messages' => [
                        [
                            'role' => 'system',
                            'content' => 'You are a helpful assistant'
                        ],
                        ...$messageHistory,
                        [
                            'role' => 'user',
                            'content' => $newMessage
                        ]
                    ],
                    'temperature' => 1.2,
                    'max_tokens' => 100,
                ],
            ]);

            return json_decode($response->getBody(), true);

        } catch (\Exception $e) {
            throw new OpenAIRequestException($e->getMessage());
        }
    }

    /**
     * Get the headers for the OpenAI API request.
     *
     * @return array
     */
    private function getHeaders(): array
    {
        return [
            'Authorization' => 'Bearer ' . env('OPENAI_API_KEY'),
            'Content-Type' => 'application/json',
        ];
    }
}
