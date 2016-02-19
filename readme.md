schema-loader
===
Description: A schema loader that takes into account file name and directory structure when registering and getting schemas

##Starting out

	npm install schema-loader
	
	var loader = require('schema-loader')();

##Example file structure:

	Schemas(directory)
		schemaOne(file)
		schemaTwo(file)
		schemaThree(file)
		
##Example schema file:
	//email.js
	module.exports: {
		email: SCHEMA,
		secondary_schema: SCHEMA
	};
	
	NOTE DEFAULT SCHEMA SHOULD BE NAMED SAME AS FILE NAME
	
	ex.
	
	if file is email.js your exported object should have a property called email		
	

##Methods

###loader.register(name,schema); // registers a schema object to the loader
###loarder.registerAll(PATH); //registers all schema objects from a directory to a loader
###loader.get(name,overload(optional)); //get schema(default unlee pass in overload string)


##EXAMPLE

Examples of use are in test directory in module