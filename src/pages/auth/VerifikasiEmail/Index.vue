<script setup>
import VerifikasiAkun from "./VerifikasiAkun.vue"

const props = defineProps({
    email: String
})

</script>
<template>
    <Suspense>
        <VerifikasiAkun :email="props.email" />
    </Suspense>
</template>