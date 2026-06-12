import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureAzsadminBackuplocations implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Azsadmin Backuplocations',
                name: 'N8nDevAzureAzsadminBackuplocations',
                icon: { light: 'file:./azure-azsadmin-backuplocations.png', dark: 'file:./azure-azsadmin-backuplocations.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Admin Backup Management Client.',
                defaults: { name: 'Azure Azsadmin Backuplocations' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureAzsadminBackuplocationsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
