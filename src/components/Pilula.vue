<template>
    <div class="pill">
        <span class="nome">{{ nome }}</span>
        <span class="cont">{{ cont }}</span>
    </div>
</template>

<script>
export default {
    props: ["nome", "cont"],
};
</script>

<style scoped>
.pill {
    background-color: crimson;
    color: white;
    margin: 5px;
    height: 40px;
    border-radius: 20px;
    font-size: 1.3rem;
    font-weight: bold;
    display: flex;
    align-content: center;
    align-items: center;
}
.pill .nome {
    margin-left: 15px;
}
.pill .cont {
    margin: 10px;
    padding: 5px;
    height: 30px;
    border-radius: 17px;
    background-color: white;
    color: brown;
    display: flex;
    justify-content: center;
    justify-items: center;
    font-size: 14px;
}
</style>