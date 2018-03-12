<template>
  <main class="main-container">
      <div class="card-body">
        <div class="col-md-6 ">
          <h4>Tabel Biodata</h4>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Nama</th>
                <th scope="col">Alamat</th>
                <th scope="col">Hobi</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="db in biodata">
                <th scope="row">1</th>
                <td>{{db.nama}}</td>
                <td>{{db.alamat}}</td>
                <td>{{db.hobi}}</td>
                <td>
                  <button type="button" name="button">Hapus</button>
                  <button type="button" name="button">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </main>
</template>

<script>

  import Firebase from 'firebase'
  var config = {
    apiKey: "AIzaSyC8aWfzz_YOb1uv_PQbZX1oKNUEt8HvN4Y",
    authDomain: "vueproject-7f665.firebaseapp.com",
    databaseURL: "https://vueproject-7f665.firebaseio.com",
    projectId: "vueproject-7f665",
    storageBucket: "vueproject-7f665.appspot.com",
    messagingSenderId: "854531521390"
  };

  var app = Firebase.initializeApp(config);
  let db = app.database();
  let dbref = db.ref('biodata');

  export default {
  name: 'TabelBiodata',
  firebase :{
    biodata : dbref
  },
  data () {
    return {

    }
  },
  created : function (){
    console.log(this.biodata);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
