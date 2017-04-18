/*
 Make HTTP Request using RESTMessageV2
 */
(function executeRule() {
    try {
        var req = new sn_ws.RESTMessageV2('PubNub', 'Publish Message');
        req.setStringParameterNoEscape('pub_key', 'pub-c-11b9ede6-f9ee-4da8-a829-944a45f29eb8');
        req.setStringParameterNoEscape('client', gs.getProperty('instance_name') + '-' + gs.getProperty('instance_id'));
        req.setStringParameterNoEscape('sub_key', 'sub-c-dafe9b8c-1ae1-11e7-bc52-02ee2ddab7fe');
        req.setStringParameterNoEscape('channel', 'CCW3970-'+gs.getProperty('instance_name'));


        var body = '{"message":"hello PubNub"}';
        req.setRequestBody(body);


        var res = req.execute();
        var responseBody = res.getBody();
        var httpStatus = res.getStatusCode();
        gs.debug(httpStatus);
    }
    catch (ex) {
        var message = ex.getMessage();
        gs.debug(message);
    }
})();