
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #6d8a68 
		"--color-primary-50": "233 237 232", // #e9ede8
		"--color-primary-100": "226 232 225", // #e2e8e1
		"--color-primary-200": "219 226 217", // #dbe2d9
		"--color-primary-300": "197 208 195", // #c5d0c3
		"--color-primary-400": "153 173 149", // #99ad95
		"--color-primary-500": "109 138 104", // #6d8a68
		"--color-primary-600": "98 124 94", // #627c5e
		"--color-primary-700": "82 104 78", // #52684e
		"--color-primary-800": "65 83 62", // #41533e
		"--color-primary-900": "53 68 51", // #354433
		// secondary | #d8b73d 
		"--color-secondary-50": "249 244 226", // #f9f4e2
		"--color-secondary-100": "247 241 216", // #f7f1d8
		"--color-secondary-200": "245 237 207", // #f5edcf
		"--color-secondary-300": "239 226 177", // #efe2b1
		"--color-secondary-400": "228 205 119", // #e4cd77
		"--color-secondary-500": "216 183 61", // #d8b73d
		"--color-secondary-600": "194 165 55", // #c2a537
		"--color-secondary-700": "162 137 46", // #a2892e
		"--color-secondary-800": "130 110 37", // #826e25
		"--color-secondary-900": "106 90 30", // #6a5a1e
		// tertiary | #f9870b 
		"--color-tertiary-50": "254 237 218", // #feedda
		"--color-tertiary-100": "254 231 206", // #fee7ce
		"--color-tertiary-200": "254 225 194", // #fee1c2
		"--color-tertiary-300": "253 207 157", // #fdcf9d
		"--color-tertiary-400": "251 171 84", // #fbab54
		"--color-tertiary-500": "249 135 11", // #f9870b
		"--color-tertiary-600": "224 122 10", // #e07a0a
		"--color-tertiary-700": "187 101 8", // #bb6508
		"--color-tertiary-800": "149 81 7", // #955107
		"--color-tertiary-900": "122 66 5", // #7a4205
		// success | #6c8967 
		"--color-success-50": "233 237 232", // #e9ede8
		"--color-success-100": "226 231 225", // #e2e7e1
		"--color-success-200": "218 226 217", // #dae2d9
		"--color-success-300": "196 208 194", // #c4d0c2
		"--color-success-400": "152 172 149", // #98ac95
		"--color-success-500": "108 137 103", // #6c8967
		"--color-success-600": "97 123 93", // #617b5d
		"--color-success-700": "81 103 77", // #51674d
		"--color-success-800": "65 82 62", // #41523e
		"--color-success-900": "53 67 50", // #354332
		// warning | #fad346 
		"--color-warning-50": "254 248 227", // #fef8e3
		"--color-warning-100": "254 246 218", // #fef6da
		"--color-warning-200": "254 244 209", // #fef4d1
		"--color-warning-300": "253 237 181", // #fdedb5
		"--color-warning-400": "252 224 126", // #fce07e
		"--color-warning-500": "250 211 70", // #fad346
		"--color-warning-600": "225 190 63", // #e1be3f
		"--color-warning-700": "188 158 53", // #bc9e35
		"--color-warning-800": "150 127 42", // #967f2a
		"--color-warning-900": "123 103 34", // #7b6722
		// error | #f8860d 
		"--color-error-50": "254 237 219", // #feeddb
		"--color-error-100": "254 231 207", // #fee7cf
		"--color-error-200": "253 225 195", // #fde1c3
		"--color-error-300": "252 207 158", // #fccf9e
		"--color-error-400": "250 170 86", // #faaa56
		"--color-error-500": "248 134 13", // #f8860d
		"--color-error-600": "223 121 12", // #df790c
		"--color-error-700": "186 101 10", // #ba650a
		"--color-error-800": "149 80 8", // #955008
		"--color-error-900": "122 66 6", // #7a4206
		// surface | #303932 
		"--color-surface-50": "224 225 224", // #e0e1e0
		"--color-surface-100": "214 215 214", // #d6d7d6
		"--color-surface-200": "203 206 204", // #cbcecc
		"--color-surface-300": "172 176 173", // #acb0ad
		"--color-surface-400": "110 116 112", // #6e7470
		"--color-surface-500": "48 57 50", // #303932
		"--color-surface-600": "43 51 45", // #2b332d
		"--color-surface-700": "36 43 38", // #242b26
		"--color-surface-800": "29 34 30", // #1d221e
		"--color-surface-900": "24 28 25", // #181c19
		
	}
}