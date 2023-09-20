<?php

namespace App\Http\Controllers;

use App\Exceptions\OpenAIRequestException;
use GuzzleHttp\Client;

class OpenAIController extends Controller {
    private const MOCK = true;

    /**
     * Send a request to the OpenAI API.
     *
     * @return array
     */
    public function sendRequest(string $newMessage, array $messageHistory) {
        if (self::MOCK) {
            $response = [];
            $response['choices'][0]['message']['content'] = 'This is an example message: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque laoreet nisl sit amet lobortis. Donec sed sem et orci tempor molestie. Quisque in mi ut enim tincidunt auctor. Mauris gravida, purus ac condimentum placerat, massa purus vestibulum leo, non condimentum arcu mauris nec augue. ';
            $response['model'] = 'mock-model-4';
            $response['usage']['prompt_tokens'] = 0;
            $response['usage']['completion_tokens'] = 0;
            $response['usage']['total_tokens'] = 0;

            sleep(1);

            return $response;
        }

        $client = new Client();

        try {
            $response = $client->post('https://api.openai.com/v1/chat/completions', [
                'headers' => $this->getHeaders(),
                'json' => [
                    'model' => 'gpt-4',
                    'messages' => [
                        [
                            'role' => 'system',
                            'content' => 'You are a helpful assistant',
                        ],
                        ...$messageHistory,
                        [
                            'role' => 'user',
                            'content' => $newMessage,
                        ],
                    ],
                    'temperature' => 1.2,
                    'max_tokens' => 1000,
                ],
            ]);

            return json_decode($response->getBody(), true);
        } catch (\Exception $e) {
            throw new OpenAIRequestException($e->getMessage());
        }
    }

    /**
     * Get the headers for the OpenAI API request.
     */
    private function getHeaders(): array {
        return [
            'Authorization' => 'Bearer ' . env('OPENAI_API_KEY'),
            'Content-Type' => 'application/json',
        ];
    }
}
