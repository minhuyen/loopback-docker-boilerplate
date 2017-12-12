var async = require('async');

module.exports = function(app){
    // data sources
    // var mongoDs = app.dataSources.mongoDs;

    // async.parallel({
    //     users: async.apply(createUsers),
    //     businesses: async.apply(createBusinesses)
    // }, function(err, results){
    //     if(err) throw err;
    //     createOrders(results.users, results.businesses, function(err) {
    //         if(err) throw err;
    //         console.log('> models created sucessfully');
    //     });
    // });

    // // create customers
    // function createUsers(cb){
    //     mongoDs.automigrate('CustomUser', function(err){
    //         if(err) cb(err);
    //         var CustomUser = app.models.CustomUser
    //         CustomUser.create([{
    //             email: 'foo@bar.com',
    //             username: 'foo',
    //             password: 'foobar'
    //         }, {
    //             email: 'john@doe.com',
    //             username: 'john',
    //             password: 'johndoe'
    //         }, {
    //             email: 'jane@doe.com',
    //             username: 'jane',
    //             password: 'janedoe'
    //         }], cb);
    //     });
    // }

    // //create businesses
    // function createBusinesses(cb) {
    //     mongoDs.automigrate('Business', function(err) {
    //         if (err) return cb(err);
    //         var Business = app.models.Business;
    //         Business.create([{
    //             name: 'Bel Cafe',
    //             city: 'Vancouver'
    //         }, {
    //             name: 'Three Bees Coffee House',
    //             city: 'San Mateo'
    //         }, {
    //             name: 'Caffe Artigiano',
    //             city: 'Vancouver'
    //         }], cb);
    //     });
    // }

    // // create orders
    // function createOrders(users, businesses, cb){
    //     mongoDs.automigrate('Order', function(err){
    //         if(err) return cb(err);
    //         var Order = app.models.Order;
    //         var DAY_IN_MILISECONDS = 1000 * 60 * 60 * 24;
    //         Order.create([{
    //             orderedTime: Date.now() - (DAY_IN_MILISECONDS * 4),
    //             amount: 23,
    //             status: "NEW_ORDER",
    //             customerId: users[0].id,
    //             businessId: businesses[0].id
    //         }, {
    //             orderedTime: Date.now() - (DAY_IN_MILISECONDS * 3),
    //             amount: 33,
    //             status: "NEW_ORDER",
    //             customerId: users[1].id,
    //             businessId: businesses[0].id
    //         }, {
    //             orderedTime: Date.now() - (DAY_IN_MILISECONDS * 2),
    //             amount: 33,
    //             status: "NEW_ORDER",
    //             customerId: users[2].id,
    //             businessId: businesses[1].id
    //         }, {
    //             orderedTime: Date.now() - (DAY_IN_MILISECONDS),
    //             amount: 33,
    //             status: "NEW_ORDER",
    //             customerId: users[2].id,
    //             businessId: businesses[2].id
    //         }], cb)
    //     })
    // }

}