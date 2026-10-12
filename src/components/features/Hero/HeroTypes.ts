export interface HeroProps {
        id: string,
        title: string,
        cta: { 
            label: string,
            href: string, 
            variant: "dark" | "light" 
        },
        img: string,
        align: "center" | "bottom-left",
    }