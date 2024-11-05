import { useState } from 'react';

interface LinkContextType {
    link: string;
    setLink: (link: string) => void;
}

export const useLinkState = (): LinkContextType => {
    const [link, setLink] = useState<string>("");

    return { link, setLink };
};

