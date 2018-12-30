module.exports = {
    networks: {
        shasta: {
            privateKey: process.env.VUE_APP_SHASTA_PRIVATE_KEY,
            consume_user_resource_percent: 30,
            fee_limit: 100000000,
            fullNode: "https://api.shasta.trongrid.io",
            solidityNode: "https://api.shasta.trongrid.io",
            eventServer: "https://api.shasta.trongrid.io",
            network_id: "*"
        },
    }
};