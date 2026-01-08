import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "react-bootstrap";
import { FaShareAlt, FaTwitterSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

interface ShareDropdownProps {
    url: string;
}

const ShareDropdown = ({ url }: ShareDropdownProps) => {
    const encodedUrl = encodeURIComponent(url);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
        } catch (e) {
            console.error("Failed to copy link", e);
        }
    };

    return (
        <Dropdown className="list-inline-item dropdown">
            <DropdownToggle
                className="btn btn-sm btn-light px-2 arrow-none"
                role="button"
                aria-expanded="false"
            >
                <FaShareAlt className="fa-fw" />
            </DropdownToggle>

            <DropdownMenu className="dropdown-menu-end min-w-auto shadow rounded">
                <DropdownItem
                    href={`https://twitter.com/intent/tweet?url=${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaTwitterSquare className="me-2" />
                    X
                </DropdownItem>

                <DropdownItem
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebookSquare className="me-2" />
                    Facebook
                </DropdownItem>

                <DropdownItem
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin className="me-2" />
                    LinkedIn
                </DropdownItem>

                <DropdownItem onClick={handleCopy}>
                    <FaLink className="me-2" />
                    Copy link
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default ShareDropdown;
