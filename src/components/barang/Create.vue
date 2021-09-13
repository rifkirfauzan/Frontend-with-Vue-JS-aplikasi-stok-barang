<template>
    <div class="barang">
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            TAMBAH DATA STOK BARANG
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="BarangStore">

                                <div class="form-group">
                                    <label>NAMA BARANG</label>
                                    <input type="text" class="form-control" v-model="barang.nama_barang"
                                           placeholder="Masukkan nama_barang">
                                    <div v-if="validation.nama_barang">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.nama_barang[0] }}
                                        </div>
                                    </div>
                                </div>


                                <div class="form-group">
                                    <label>JENIS_BARANG</label>
                                    <input type="text" class="form-control" v-model="barang.jenis_barang"
                                           placeholder="Masukkan jenis_barang">
                                    <div v-if="validation.jenis_barang">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.jenis_barang[0] }}
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <label>HARGA BARANG</label>
                                    <input type="number" class="form-control" v-model="barang.harga_barang"
                                           placeholder="Masukkan harga_barang">
                                    <div v-if="validation.harga_barang">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.harga_barang[0] }}
                                        </div>
                                    </div>
                                </div>

                               <div class="form-group">
                                    <label>JUMLAH BARANG</label>
                                    <input type="number" class="form-control" v-model="barang.jumlah_barang"
                                           placeholder="Masukkan jumlah_barang">
                                    <div v-if="validation.jumlah_barang">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.jumlah_barang[0] }}
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-md btn-success mr-2">SIMPAN</button>
                                <button type="reset" class="btn btn-md btn-danger">RESET</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>




<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                barang: {},
                validation: []
            }
        },
        methods: {
            BarangStore() {
                axios.post('http://localhost:8000/barang', this.barang)
                    .then((response) => {
                        this.$router.push({
                            name: 'barang'
                        });
                        console.log(response.data.data);
                    }).catch(error => {
                    this.validation = error.response.data.data;
                });
            }
        }
    }
</script>