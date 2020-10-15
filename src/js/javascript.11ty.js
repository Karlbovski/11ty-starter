const
    jsMain = 'js/main.js',
    rollup = require('rollup'),
    terser = require('rollup-plugin-terser').terser,

    inputOptions = {
        input: './src/' + jsMain
    },
    
    outputOptions =  {
        format: 'es',
        sourcemap: dev,
        plugins: [
            terser({mangle: {
                toplevel: true
            },
            compress: {
                drop_console: !dev,
                drop_debugger: !dev 
            },
            output: {
                quote_style: 1
            }
            })
        ]
    };

module.exports = class {
    
    data(){
        return{
            permalink: jsMain,
            eleventyExcludeFromCollections: true
        };
    }

    async render(){
        const 
            bundle = await rollup.rollup(inputOptions),
            { output } = await bundle.generate(outputOptions),
            out = output.length && output[0];

        // process images
        console.log('javascript.11ty.js - Javascript processing'); 
        
        let code = '';
        if(out){
            // JS code
            code = out.code;
            // inline sourcemap
            if(out.map){
                let b64 = new Buffer.from(out.map.toString());
                code += '//# sourceMappingURL=data:application/json;base64,' + b64.toString('base64');
            }
        }

        return code;
    }
};
