<template>
    <div class="w-full bg-gray-500">
        <div class="flex justify-between items-center h-[50px]">
            <!-- Drawer trigger-->
            <div class="p-4 cursor-pointer hover:bg-gray-100">
                <i class="pi pi-bars"></i>
            </div>

            <!-- Search bar -->
            <div class="py-2">
                <InputText v-model="search" class="h-[40px]" type="text" placeholder="Search..." />
            </div>

            <!-- User information -->
            <div class="flex space-x-3 items-center- justify-center px-3">
                <div class="text-md">Username (Admin)</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserHeader',
        data() {
            return {
                search: ''
            }
        }
    }
</script>