type ImageLinkArgs = {
	/** Image ID */
	id: ImageKey;
	// /** Image Height */
	// h: number;
	// /** Image Width */
	// w: number;
	// /** Adds the fit=max query param */
	// max?: boolean;
};

export function getImageLink(
    { 
        id, 
        // h, 
        // w, 
        // max 
    }: ImageLinkArgs): string {
	// const path = images[id].raw;
	// return `${path}&w=${w}&h=${h}&auto=format&fit=${max ? 'max' : 'crop'}`;
    return images[id].url
}

export type ImageKey = keyof typeof images;

export const images = {
	'YOErFW8AfkI': {
		url: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg'
	},
	'z_X0PxmBuIQ': {
		url: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Ficus_elastica_leaves_02.JPG'
	},
	'8vKVlNIbAc4': {
		url: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-923952106-1589827895.jpg?crop=0.752xw:1.00xh;0,0&resize=980:*'
	},
	'vjUokUWbFOs': {
		url: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Hedera_helix_Dover.jpg'
	}
} as const;