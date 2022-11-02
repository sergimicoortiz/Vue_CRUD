<template>
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <div :class="navClass">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/home">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/todos">TodoList</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

export default {
}
</script>