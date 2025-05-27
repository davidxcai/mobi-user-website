import { useToken } from "@chakra-ui/react";

export function MobiLogo() {
    const [fillColor] = useToken("colors", ["white"]);
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M46 46H0V0H10L23.4238 23.25L36.8467 0H46V46Z
                   M54 23C54 10.2975 64.2975 0 77 0C89.7025 0 100 10.2975 100 23C100 35.7025 89.7025 46 77 46C64.2975 46 54 35.7025 54 23Z
                   M0 100V54H46V64L22.75 77.4238L46 90.8467V100H0Z
                   M54 54H100V100H54V54Z"
                fill={fillColor}
            />
        </svg>
    );
}
