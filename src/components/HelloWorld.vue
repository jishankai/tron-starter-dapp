<template>
  <div class="hello">
    <h1>Here is the value stored on the blockchain: {{currentValue}}</h1>
    <b-field label="Update the value">
      <b-input size="is-small" class="setValue" v-model="newContractValue"></b-input>
    </b-field>
    <h1>{{loading}}</h1>
    <button class="button is-primary" @click="setValue">Update</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
const TronWeb = require("tronweb");
const fullNode = "https://api.shasta.trongrid.io";
const solidityNode = "https://api.shasta.trongrid.io";
const eventServer = "https://api.shasta.trongrid.io";
const privateKey = process.env.VUE_APP_SHASTA_PRIVATE_KEY;

const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);
const MyContract = require("../../build/contracts/MyContract.json");
const abi = MyContract.abi;

@Component
export default class HelloWorld extends Vue {
  currentValue: string = "";
  newContractValue: string = "";
  loading: string = "";
  isValueUpdated: boolean = false;
  async getValue() {
    let contractInstance = await tronWeb
      .contract()
      .at("THi8a7dF5jW7e5PDMoEc8MxPZUkK6tM1u1");
    let currentValue = await contractInstance.get().call();
    this.currentValue = currentValue;
  }

  async setValue() {
    this.loading = "Transaction request is being processed";
    let contractInstance = await tronWeb
      .contract()
      .at("THi8a7dF5jW7e5PDMoEc8MxPZUkK6tM1u1");
    const result = await contractInstance.set(this.newContractValue).send();
    if (result) {
      this.loading = "";
      this.isValueUpdated = true;
    }
  }

  @Watch("isValueUpdated")
  onPropertyChanged(newValue: boolean, oldValue: boolean) {
    if (newValue == true) {
      window.location.reload(true);
    }
  }
  mounted() {
    this.getValue();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.setValue {
  max-width: 400px;
  margin: 0 auto;
}
</style>
