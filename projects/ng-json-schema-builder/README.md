JSON Schema Builder
A simple GUI tool to enable designing and building JSON schemas

## Usage
import { NgJsonSchemaBuilder } from 'ng-json-schema-builder';

imports: [
    ....,
    NgJsonSchemaBuilder,
    ....
],

`<ng-jsonschema [models]="models" name="data" [ngModel]="schema"></ng-jsonschema>`