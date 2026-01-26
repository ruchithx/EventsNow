import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		spacing: {
  			'571': '571px'
  		},
  		fontSize: {
  			'13': '13px',
  			'24': '24px'
  		},
  		colors: {
  			initial: '#F9EBE9',
  			myBrown: '#AC736D',
  			'custom-orange': '#D47151',
  			'custom-admin': '#70B891',
  			'custom-green': '#4e8171',
  			'custom-blue': '#455273',
  			'custom-lightorange': '#F9EBE9',
  			profileName: '#505050',
  			'custom-brown': '#D7CFC7',
  			eventBrown: '#764C35',
  			navWhite: '#D7CFC7',
  			'custom-gray': '#F8F8F8',
  			dashboard: '#E9E9E9',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			Inter: [
  				'Inter',
  				'sans - serif'
  			],
  			khand: [
  				'Khand',
  				'sans-serif'
  			],
  			IBM: [
  				'IBM Plex Mono',
  				'monospace'
  			]
  		},
  		height: {
  			'22': '22px',
  			'394': '394px'
  		},
  		width: {
  			'63': '63px',
  			'761': '761px'
  		},
  		boxShadow: {
  			'3xl': ' 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset',
  			normalComponent: '0px 4px 4px 0px rgba(212, 113, 81, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
