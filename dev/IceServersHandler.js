// IceServersHandler.js

var IceServersHandler = (function() {
    function getIceServers(connection) {
        // resiprocate: 3344+4433
        // pions: 7575
        var iceServers = [{
            'urls': [
                'stun:10.179.6.106:3478?transport=udp'
            ]
        }];

        return iceServers;
    }

    return {
        getIceServers: getIceServers
    };
})();
