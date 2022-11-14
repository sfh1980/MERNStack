# POSTMATE - testing server and routes

* get all
    * http://localhost8000:/api/tableNames
        * Get
            * Params
            * Body
            * Pretty
            * dropdown at the end : JSON

* get one
    * http://localhost8000:/api/tableName/:id
        * Get
            * Params
            * Body
            * Pretty
            * dropdown at the end : JSON

* create
    * http://localhost8000:/api/tableNames
        * POST
            * Body
            * raw
            * dropdown at the end : JSON

        * looks like:
        ```
            {
                "name" : "thing",
                "array" : ["thing", "thing2" , "things3"],
                "number" : 5
            }
        ```

* update
    * http://localhost8000:/api/tableNames/:id
        * Put
            * Body
            * raw
            * dropdown at the end : JSON

        * looks like:
        ```
            {
                "name" : "thing",
                "array" : ["thing", "thing2" , "things3"],
                "number" : 5
            }
        ```


* delete
    * http://localhost8000:/api/tableNames/:id
        * Delete
            * Params
            * Body
            * Pretty
