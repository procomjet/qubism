import { Button } from "@/entities/ui";
import Link from "next/link";

export function SignUpButton() {
    return (
      <Link href="/signup">
        <Button text="SIGN UP" backgroundColor="white" textColor="#28888c" />
      </Link>
    );
}

