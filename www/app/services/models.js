define(['require'], function(require) {

    /**
     * Models generated from "Model and Storage" and models extracted from services.
     * To generate entity use syntax:
     * Apperyio.EntityAPI("<model_name>[.<model_field>]");
     */

    var models = {
        "String": {
            "type": "string"
        },
        "Number": {
            "type": "number"
        },
        "Boolean": {
            "type": "boolean"
        },
        "taskInfo": {
            "type": "object",
            "properties": {
                "taskName": {
                    "type": "string"
                },
                "thoughts": {
                    "type": "array",
                    "items": [{
                        "type": "string"
                    }]
                },
                "feelings": {
                    "type": "string"
                }
            }
        }
    };
    return models;

});