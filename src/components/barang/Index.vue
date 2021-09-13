<template>
    <div class="barang">
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                           DATA STOK BARANG
                        </div>
                        <div class="card-body">
                            <router-link :class="['btn btn-md btn-success mb-2']" to="/create">TAMBAH DATA</router-link>
                            <hr>

                            <div class="table-responsive mt-2">
                                <table class="table table-hover table-bordered">
                                    <thead>
                                    <tr>
                                        <th>NAMA_BARANG</th>
                                        <th>JENIS_BARANG</th>
                                        <th>HARGA_BARANG</th>
                                        <th>JUMLAH_BARANG</th>
                                        <th>AKSI</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="barang in barang" :key="barang.id">
                                        <td>{{ barang.nama_barang }}</td>
                                        <td>{{ barang.jenis_barang }}</td>
                                        <td>{{ barang.harga_barang }}</td>
                                        <td>{{ barang.jumlah_barang }}</td>
                                        <td class="text-center">
                                            <router-link :to="{name: 'edit', params: { id: barang.id }}" class="btn btn-sm btn-primary mr-2">EDIT</router-link>
                                            <button @click.prevent="BarangDelete(barang.id)" class="btn btn-sm btn-danger">HAPUS</button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

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
                barang: []
            }
        },
        created() {
            axios.get('http://localhost:8000/barang').then(response => {
                this.barang = response.data.data;
            });
        },
        methods: {
            BarangDelete(id)
            {
                axios.delete(`http://localhost:8000/barang/${id}`)
                    .then(response => {
                        this.barang.splice(this.barang.indexOf(id), 1);
                        console.log(response);
                    }).catch(error => {
                    console.log(error.response);
                });
            }
        }

    }
</script>