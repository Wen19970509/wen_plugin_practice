<template>
    <button :disabled="isDisabled" @click="onClick">{{ buttonMsg }}</button>
</template>

<script>
export default {
    data() {
        return {
            buttonMsg: '按按看!',
            isDisabled: false,
        };
    },
    methods: {
        onClick() {
            this.buttonMsg = '你已經按過了！';
            alert('這是 Wen Chen 的 Vue 插件練習');
            this.isDisabled = true;
        },
    },
};
</script>

<style></style>
