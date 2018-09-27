<template>
    <div>
        <infinite-menu :data="data1"></infinite-menu>
    </div>
</template>

<script>
import infiniteMenu from '../../components/InfiniteMenu/InfiniteMenu'
export default {
    data () {
        return {
            data1: [
                {
                    name: 'parent0-0',
                    children: [
                        {
                            name: 'children0-0'
                        },
                        {
                            name: 'children0-1',
                            children: [
                                {
                                    name: 'children0-1-0'
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'parent1-0',
                    children: [
                        {
                            name: 'children1-0'
                        },
                        {
                            name: 'children1-1',
                            children: [
                                {
                                    name: 'children1-1-0'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    components: {
        infiniteMenu
    }
}
</script>
