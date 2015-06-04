/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  'get /system/guid':'SystemController.getGUID',
  'get /system/token':'SystemController.gettoken',
  'get /v0.1/system/token':'v_0_1/SystemController.gettoken',

  //Events Routes
  'post /v0.1/event':'v_0_1/EventController.create',
  'put /v0.1/event/:id':'v_0_1/EventController.update',
  'get /v0.1/event/:id?':'v_0_1/EventController.find',



  //Place Routes
  'get /v0.1/place/:id?':'v_0_1/PlaceController.find',
  'post /v0.1/place/':'v_0_1/PlaceController.create',
  'put /v0.1/place/:id?':'v_0_1/PlaceController.update',
  'delete /v0.1/place/:id?':'v_0_1/PlaceController.destroy',


  //Speaker Routes
  'get /v0.1/speaker/:id?':'v_0_1/SpeakerController.find',
  'post /v0.1/speaker/':'v_0_1/SpeakerController.create',
  'put /v0.1/speaker/:id?':'v_0_1/SpeakerController.update',
  'delete /v0.1/speaker/:id?':'v_0_1/SpeakerController.destroy',
  


  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
