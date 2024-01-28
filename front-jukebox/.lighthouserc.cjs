module.exports = {
    ci: {
        assert:{
            preset: 'lighthouse:recommended',
            //Test assertions perso
            // assertions: {
            //     'categories:perfomance': ['warn', {minScore: 0.7}],
            //     'categories:accessibility': ['error', {minScore: 1}],
            //     'categories:speed': ['warn', {minScore: 0.5}],
            // },
        },
        collect: {
            staticDistDir: './.output/public',
        },
        upload: {
            target: 'temporary-public-storage'
        }
    }
}