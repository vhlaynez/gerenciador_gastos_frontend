<template>
    <div class="auth-content">
        <div class="auth-modal"></div>
    </div>
</template>

<script>
import { baseApiUrl, showError, userKey} from '@/global'
export default {
    name: 'Auth',
    data: function() {
        return {
            demonstration: false,
            showSignup: false,
            admin: false,
            user:{}
        }
    }
}
</script>
<style>
    .auth-content {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .auth-modal {
        background-color: #FFF;
        width: 350px;
        padding: 35px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>