<template>
    <div>
        <transition name="modal">
            <div class="modal-mask modal-wrapper">
                <div class="modal-content modal-dialog" role="document">
                    <div class="modal-header">
                        <h5 class="modal-title">Order Detail</h5>
                    </div>
                    <div class="modal-body">
                        <table class="table table-light">
                                <tbody>
                                <tr>
                                    <td>Your Funds:</td>
                                    <td>${{funds}}</td>
                                </tr>
                                <tr>
                                    <td>Price Per Stock:</td>
                                    <td>${{price}}</td>
                                </tr>
                                <tr>
                                    <td>Quantity Sold:</td>
                                    <td>{{quantity}}</td>
                                </tr>
                                <tr>
                                    <td>Total Profit:</td>
                                    <td>${{quantity*price}}</td>
                                </tr>
                                <br>
                                <tr>
                                    <td>Funds Remaining:</td>
                                    <td>{{funds}} + {{quantity*price}} = ${{funds + quantity*price}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" @click="$emit('cancel')">Cancel</button>
                        <button type="button" class="btn btn-success" @click="$emit('sell')" :disabled="funds <= quantity*price">Confirmed</button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        props: ['quantity','price','funds'],
        destroyed() {
          console.log("died");
        }
    }
</script>


<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>