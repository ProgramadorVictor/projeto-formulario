<template>
    <div>
        <i v-for="estrela in estrelas" :key="estrela.id" :class="estrela.estilo" @click="marcarAvaliacao(estrela.id)"></i>
        {{ this.avaliacao }}
    </div>
</template>
<script>
    export default {
        props:{
            numeroEstrelas: {
                type: Number,
                required: true //Requerido
            }
        },
        data: () => ({
            estrelas: [],
            avaliacao: 0,
        }),
        methods:{
            iniciarEstrelas(){
                for(let i = 0; i < this.numeroEstrelas; i++){
                    this.estrelas[i] = {id: i, estilo: 'bi bi-star estrela'}
                }
            },
            marcarAvaliacao(quant){
                this.iniciarEstrelas();
                this.avaliacao = quant + 1
                for(let i = 0; i < this.avaliacao; i++){
                    this.estrelas[i] = {id: i, estilo: 'bi bi-star-fill estrela preenchida'}
                }

                // this.$emit('avaliar', this.avaliacao); //Emitindo evento personalizado para o componente pai.
                this.$emit('update:avaliar', this.avaliacao); //Emitindo evento personalizado para o componente pai com v-model
            }
        },
        created(){
            this.iniciarEstrelas()
        }
    }
</script>
<style scoped>
    .estrela{
        font-size: 1.5rem;
        color: #999;
        margin-left: 1px;
        margin-right: 1px;
    }
    .preenchida{
        color: #fc0;
    }
</style>