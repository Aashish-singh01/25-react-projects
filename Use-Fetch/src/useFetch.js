import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) {
            setData(null);
            setPending(false);
            setError("No URL provided");
            return;
        }

        setPending(true);
        setError(null);

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((json) => setData(json))
            .catch((err) => setError(err.message || "Fetch failed"))
            .finally(() => setPending(false));
    }, [url]);

    return { data, pending, error };
}
