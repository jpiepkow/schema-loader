module.exports = () => {
    var dependencies = {};
    var factories = {};
    var sLoc = {};
    sLoc.factory = (name, factory) => {
        if(typeof factory === 'object') {
            factories[name] = {};
            factories[name].orig = factory[Object.keys(factory)[0]];
            if(factory[Object.keys(factory)[1]]) {
                factories[name].second = factory[Object.keys(factory)[1]];
            }
            factories[name].parent = factory
        } else {
            factories[name] = {};
            factories[name].orig = factory
        }
    };
    sLoc.register = (name, instance) => {
        var fullPath = process.mainModule.filename.split('/');
        var fileName = fullPath[fullPath.length -1].split('.')[0];
            dependencies[name] = {};
            dependencies[name].orig = instance[fileName];
            dependencies[name].parent = instance
    };

    sLoc.get = (name,override) => {
            if(override) {
             if(!dependencies[name].parent[override]) {
                var factory = factories[name];
                dependencies[name].parent[override] = factory && factory(sLoc);
                if(dependencies[name].parent[override]) {
                    throw new Error (`Cannot locate ${name}`)
                }
            }
            return dependencies[name].parent[override]
            }
            if(!dependencies[name].orig) {
                var factory = factories[name];
                dependencies[name].orig = factory && factory(sLoc);
                if(dependencies[name].orig) {
                    throw new Error (`Cannot locate ${name}`)
                }
            }
            return dependencies[name].orig
    };
    return sLoc;

};
