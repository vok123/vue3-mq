<template>
    <header class="container-fluid px-4 py-3">
        <div class="logo">
            <router-link to="/">
                <img src="../images/logo.png" />
            </router-link>
        </div>
        <div class="spacer"></div>
        <div class="external-logo">
            <a href="https://github.com/craigrileyuk/vue3-mq">
                <img src="../images/github.png" />
            </a>
            <a href="https://www.npmjs.com/package/vue3-mq">
                <img src="../images/npm.png" />
            </a>
        </div>
    </header>
</template>

<style lang="scss">
@import "../scss/variables.scss";

header {
    background-color: $vue-blue;
    color: white;
    display: flex;
    align-items: center;
}

.logo {
    color: $vue-green;
    height: calc(75px + 1vw);

    img {
        max-height: 100%;
    }
}

.external-logo {
    height: 50px;

    a:not(:last-child) {
        margin-right: 2em;
    }

    a img {
        transition: filter 150ms ease-in-out;
    }

    a:hover img,
    a:focus img {
        filter: sepia(1) saturate(5);
    }
}
</style>
