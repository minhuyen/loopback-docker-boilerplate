'use strict';

module.exports.disableAllMethods = function disableAllMethods(
    model,
    methodsToExpose
) {
  if (model && model.sharedClass)    {
    methodsToExpose = methodsToExpose || [];

    var modelName = model.sharedClass.name;
    var methods = model.sharedClass.methods();
    var relationMethods = [];
    var hiddenMethods = [];

    try        {
      Object.keys(model.definition.settings.relations).forEach(function(
          relation
        ) {
        // console.log("============relation===========: ", relation);
        relationMethods.push({
          name: '__findById__' + relation,
          isStatic: false,
        });
        relationMethods.push({
          name: '__destroyById__' + relation,
          isStatic: false,
        });
        relationMethods.push({
          name: '__updateById__' + relation,
          isStatic: false,
        });
        relationMethods.push({name: '__exists__' + relation, isStatic: false});
        relationMethods.push({name: '__link__' + relation, isStatic: false});
        relationMethods.push({name: '__get__' + relation, isStatic: false});
        relationMethods.push({name: '__create__' + relation, isStatic: false});
        relationMethods.push({name: '__update__' + relation, isStatic: false});
        relationMethods.push({name: '__destroy__' + relation, isStatic: false});
        relationMethods.push({name: '__unlink__' + relation, isStatic: false});
        relationMethods.push({name: '__count__' + relation, isStatic: false});
        relationMethods.push({name: '__delete__' + relation, isStatic: false});
      });
    } catch (err) {}

    methods.concat(relationMethods).forEach(function(method)        {
      var methodName = method.name;
            // console.log("====methodName======: ", methodName);
      if (methodsToExpose.indexOf(methodName) < 0)            {
        hiddenMethods.push(methodName);
        model.disableRemoteMethodByName(methodName, method.isStatic);
      }
    });

    if (hiddenMethods.length > 0)        {
            // console.log('\nRemote mehtods hidden for', modelName, ':', hiddenMethods.join(', '), '\n');
    }
  }
};

module.exports.disableAllRelationMethod = function disableAllRelationMethod(
    model,
    methodsToExpose
) {
  const relationMethodPrefixes = [
    'prototype.__findById__',
    'prototype.__destroyById__',
    'prototype.__updateById__',
    'prototype.__exists__',
    'prototype.__link__',
    'prototype.__get__',
    'prototype.__create__',
    'prototype.__update__',
    'prototype.__destroy__',
    'prototype.__unlink__',
    'prototype.__count__',
    'prototype.__delete__',
  ];

  if (model && model.sharedClass)    {
    methodsToExpose = methodsToExpose || [];

    var modelName = model.sharedClass.name;
    var methods = model.sharedClass.methods();
    var relationMethods = [];
    var hiddenMethods = [];

    try        {
      Object.keys(model.definition.settings.relations).forEach(function(
          relation) {
        relationMethodPrefixes.forEach(function(prefix) {
          var methodName = prefix + relation;
                    // console.log("============methodName===========: ", methodName);
          relationMethods.push({name: methodName, isStatic: false});
        });
      });
    } catch (err) {}

    relationMethods.forEach(function(method)        {
      var methodName = method.name;
      if (methodsToExpose.indexOf(methodName) < 0)            {
        hiddenMethods.push(methodName);
        model.disableRemoteMethodByName(methodName, method.isStatic);
      }
    });

    if (hiddenMethods.length > 0)        {
            // console.log('\nRemote mehtods hidden for', modelName, ':', hiddenMethods.join(', '), '\n');
    }
  }
};
