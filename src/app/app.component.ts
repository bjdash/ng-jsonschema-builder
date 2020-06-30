import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apicNgJsonSchema';
  schema = { "type": "object", "properties": { "id": { "type": "string", "description": "Todo id" }, "name": { "type": "string", "description": "Todo name" }, "completed": { "type": "boolean", "description": "Completion status of the todo", "default": false }, "created": { "type": "integer", "description": "Todo creation timestamp" } }, "required": ["id", "name"] }
  models = [
    {
      'name': 'User',
      'nameSpace': 'user',
      'data': { "type": "object", "properties": { "id": { "type": "string", "description": "Todo id" }, "name": { "type": "string", "description": "Todo name" }, "completed": { "type": "boolean", "description": "Completion status of the todo", "default": false }, "created": { "type": "integer", "description": "Todo creation timestamp" } }, "required": ["id", "name"] }
    },
    {
      'name': 'Address',
      'nameSpace': 'address',
      'data': {
        "type": "object",
        "properties": {
          "asd": {
            "type": "string"
          },
          "xxx": {
            "type": "object",
            "properties": {
              "x1": {
                "type": [
                  "null",
                  "number"
                ]
              }
            }
          },
          "arr": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "ao1": {
                  "type": [
                    "integer",
                    "boolean"
                  ]
                }
              }
            }
          }
        }
      }
    },
    {
      'name': 'Person',
      'nameSpace': 'person',
      'data': {
        'type': 'object',
        'properties': {
          'name': {
            'type': 'string',
            'minLength': 3,
            'maxLength': 255
          },
          'age': {
            'type': 'integer',
            'minimum': 18
          }
        },
        'required': [
          'name',
          'age'
        ]
      }
    }

  ];
}
