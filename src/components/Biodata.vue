<template>
  <main class="main-container">
      <div class="card-body">
        <div class="col-md-6 ">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Nama Lengkap</label>
            <input type="text" class="form-control" v-model="nama"  aria-describedby="emailHelp" placeholder="Enter Name">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Alamat</label>
             <textarea class="form-control" v-model="alamat" rows="5" id="comment"></textarea>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Hobi</label>
            <input type="text" v-model="hobi" class="form-control" id="exampleInputHobi" placeholder="Hobi">
          </div>
          <button type="submit" v-on:click="kirimbiodata" class="btn btn-primary">Kirim</button>
        </form>
        </div>
      </div>
  </main>
</template>

<script>
export default {
  name: 'Biodata',
  data () {
    return {
      nama:'',
      alamat:'',
      hobi:''
    }
  },
  methods: {
    kirimbiodata() {
      console.log('ini kirim biodata');
      console.log(this.nama);
      console.log(this.alamat);
      console.log(this.hobi);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
