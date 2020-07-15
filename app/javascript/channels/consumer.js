// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.

import { createConsumer } from "@rails/actioncable"

export default createConsumer()


// This is predefined by rails new, though the tutorial (using Rails 5) states this needs to be created in a slightly different directory.
// TBD if this will still function the way it is intended by following the tutorial or if further tweaking needs to take place to 
// duplicate the desired functionality.