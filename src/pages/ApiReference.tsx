
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Copy, Check } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ApiReference = () => {
  const { toast } = useToast();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast({
      description: "Code copied to clipboard",
    });
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const CodeBlock = ({ code, language = 'bash', index }: { code: string; language?: string; index: number }) => (
    <div className="relative">
      <pre className="bg-slate-950 text-slate-50 p-4 rounded-md overflow-x-auto">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <button 
        className="absolute top-2 right-2 p-2 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors"
        onClick={() => copyToClipboard(code, index)}
        aria-label="Copy code"
      >
        {copiedIndex === index ? (
          <Check className="h-4 w-4 text-green-400" />
        ) : (
          <Copy className="h-4 w-4 text-slate-400" />
        )}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slack-black dark:text-white">
              API Reference
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Complete reference documentation for the IdeoxAI API.
            </p>
          </div>

          <Tabs defaultValue="overview" className="mb-12">
            <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="authentication">Authentication</TabsTrigger>
              <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-8">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">API Overview</h2>
                <p className="mb-4">
                  The IdeoxAI API is organized around REST. Our API has predictable resource-oriented URLs, 
                  accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard 
                  HTTP response codes, authentication, and verbs.
                </p>
                <p className="mb-4">
                  The API is designed to have predictable, resource-oriented URLs and to use HTTP response 
                  codes to indicate API errors. We use built-in HTTP features, like HTTP authentication and 
                  HTTP verbs, which can be understood by off-the-shelf HTTP clients.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">Base URL</h3>
                <p className="mb-3">All API requests should be made to the following base URL:</p>
                <CodeBlock 
                  code="https://api.ideoxai.com/v1" 
                  index={0}
                />
                <h3 className="text-xl font-semibold mt-6 mb-3">Rate Limiting</h3>
                <p className="mb-4">
                  The IdeoxAI API implements rate limiting to prevent abuse. Rate limits are applied on a 
                  per-key basis. If you exceed the rate limit, API requests will fail with a 429 Too Many 
                  Requests error.
                </p>
                <p>
                  Rate limits are:
                </p>
                <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                  <li>100 requests per minute for free tier accounts</li>
                  <li>1,000 requests per minute for professional tier accounts</li>
                  <li>Custom limits for enterprise accounts</li>
                </ul>
              </Card>
            </TabsContent>
            
            <TabsContent value="authentication" className="mt-8">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Authentication</h2>
                <p className="mb-4">
                  The IdeoxAI API uses API keys to authenticate requests. You can view and manage your API 
                  keys in the IdeoxAI Dashboard.
                </p>
                <p className="mb-4">
                  Authentication is performed via HTTP Bearer Auth. Provide your API key as the bearer token 
                  in the Authorization header.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">Example Request</h3>
                <CodeBlock 
                  code={`curl -X GET \\
  https://api.ideoxai.com/v1/bots \\
  -H "Authorization: Bearer your_api_key"`}
                  index={1}
                />
                <p className="mt-4 mb-4">
                  Your API keys carry many privileges, so be sure to keep them secure. Do not share your 
                  API keys in publicly accessible areas such as GitHub, client-side code, etc.
                </p>
                <div className="bg-amber-50 dark:bg-amber-950 border-l-4 border-amber-500 p-4 mt-6">
                  <h4 className="font-semibold text-amber-800 dark:text-amber-300">Security Notice</h4>
                  <p className="text-amber-700 dark:text-amber-400">
                    Never expose your API keys on the client side of your application. Always make API calls 
                    from your server where your API key can be securely stored.
                  </p>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="endpoints" className="mt-8">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">API Endpoints</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Bot Management</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="bg-green-500 text-white px-2 py-1 text-sm rounded mr-2">GET</span>
                        <code>/bots</code>
                      </div>
                      <p className="mb-2">List all bots</p>
                      <CodeBlock 
                        code={`curl -X GET \\
  https://api.ideoxai.com/v1/bots \\
  -H "Authorization: Bearer your_api_key"`}
                        index={2}
                      />
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="bg-green-500 text-white px-2 py-1 text-sm rounded mr-2">GET</span>
                        <code>/bots/{'{bot_id}'}</code>
                      </div>
                      <p className="mb-2">Retrieve a bot</p>
                      <CodeBlock 
                        code={`curl -X GET \\
  https://api.ideoxai.com/v1/bots/bot_123456 \\
  -H "Authorization: Bearer your_api_key"`}
                        index={3}
                      />
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-500 text-white px-2 py-1 text-sm rounded mr-2">POST</span>
                        <code>/bots</code>
                      </div>
                      <p className="mb-2">Create a new bot</p>
                      <CodeBlock 
                        code={`curl -X POST \\
  https://api.ideoxai.com/v1/bots \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Customer Support Bot",
    "description": "Bot for handling common customer inquiries",
    "settings": {
      "language": "en",
      "timezone": "UTC"
    }
  }'`}
                        index={4}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Automations</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="bg-green-500 text-white px-2 py-1 text-sm rounded mr-2">GET</span>
                        <code>/automations</code>
                      </div>
                      <p className="mb-2">List all automations</p>
                      <CodeBlock 
                        code={`curl -X GET \\
  https://api.ideoxai.com/v1/automations \\
  -H "Authorization: Bearer your_api_key"`}
                        index={5}
                      />
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-500 text-white px-2 py-1 text-sm rounded mr-2">POST</span>
                        <code>/automations</code>
                      </div>
                      <p className="mb-2">Create a new automation</p>
                      <CodeBlock 
                        code={`curl -X POST \\
  https://api.ideoxai.com/v1/automations \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Email to CRM",
    "description": "Automatically create CRM contacts from email signups",
    "trigger": {
      "type": "email",
      "config": {
        "mailbox": "signups@example.com",
        "conditions": {
          "subject": "New Signup"
        }
      }
    },
    "actions": [
      {
        "type": "crm",
        "operation": "create_contact",
        "config": {
          "mapping": {
            "email": "{{email}}",
            "name": "{{name}}",
            "source": "Email Signup"
          }
        }
      }
    ]
  }'`}
                        index={6}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="examples" className="mt-8">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">API Examples</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Example: Creating a Chatbot</h3>
                  <p className="mb-4">
                    This example demonstrates how to create a new AI chatbot using the IdeoxAI API.
                  </p>
                  <CodeBlock 
                    code={`// JavaScript
const createBot = async () => {
  const response = await fetch('https://api.ideoxai.com/v1/bots', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer your_api_key',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Customer Support Bot',
      description: 'Bot for handling common customer inquiries',
      settings: {
        language: 'en',
        timezone: 'UTC',
        personality: 'friendly and helpful',
      },
      knowledgeBase: {
        documents: [
          {
            id: 'faq-1',
            content: 'Our support hours are Monday to Friday, 9am to 5pm EST.'
          },
          {
            id: 'faq-2',
            content: 'Returns are accepted within 30 days of purchase with a valid receipt.'
          }
        ]
      }
    })
  });
  
  const data = await response.json();
  console.log('Bot created:', data);
};

createBot();`}
                    language="javascript"
                    index={7}
                  />
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Example: Setting Up an Automated Workflow</h3>
                  <p className="mb-4">
                    This example shows how to create an automation that processes new orders from an e-commerce platform.
                  </p>
                  <CodeBlock 
                    code={`// Python
import requests
import json

api_key = 'your_api_key'
headers = {
    'Authorization': f'Bearer {api_key}',
    'Content-Type': 'application/json'
}

data = {
    'name': 'New Order Processing',
    'description': 'Process new orders from WooCommerce',
    'trigger': {
        'type': 'webhook',
        'config': {
            'event': 'woocommerce.order.created'
        }
    },
    'actions': [
        {
            'type': 'email',
            'operation': 'send',
            'config': {
                'to': '{{order.customer.email}}',
                'subject': 'Thank you for your order!',
                'body': 'Dear {{order.customer.first_name}},\\n\\nThank you for your order #{{order.id}}!'
            }
        },
        {
            'type': 'inventory',
            'operation': 'update',
            'config': {
                'items': '{{order.line_items}}'
            }
        },
        {
            'type': 'shipping',
            'operation': 'create_label',
            'config': {
                'address': '{{order.shipping_address}}',
                'items': '{{order.line_items}}'
            }
        }
    ]
}

response = requests.post('https://api.ideoxai.com/v1/automations', headers=headers, json=data)
print('Response:', response.json())`}
                    language="python"
                    index={8}
                  />
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApiReference;
