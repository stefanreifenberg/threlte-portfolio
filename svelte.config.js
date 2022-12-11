import preprocess from 'svelte-preprocess'
import seqPreprocessor from 'svelte-sequential-preprocessor'
import { preprocessThrelte } from '@threlte/preprocess'

const config = {
	// …
	preprocess: seqPreprocessor([preprocess(), preprocessThrelte()])
}

export default config