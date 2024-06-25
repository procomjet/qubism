import { Button } from "@/entities/ui";
import Link from "next/link";

export function LoginButton() {
    return (
      <Link href="/login">
        <Button
          text="LOG IN"
          backgroundColor="linear-gradient(126.46deg, #28888c 15.02%, #042a50 146.17%)"
          textColor="white"
        />
      </Link>
    );
}

