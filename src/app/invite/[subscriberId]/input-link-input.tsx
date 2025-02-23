'use client';

import { Check, Copy, Link } from 'lucide-react';
import { useState } from 'react';
import { IconButton } from '../../../components/icon-button';
import { InputField, InputIcon, InputRoot } from '../../../components/input';

interface InviteLinkInputProps {
  inviteLink: string;
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  const [clipboardCopied, setClipboardCopied] = useState(false);

  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink);
    setClipboardCopied(true);

    setTimeout(() => {
      setClipboardCopied(false);
    }, 1500);
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField readOnly defaultValue={inviteLink} />

      <div className="relative">
        <IconButton
          className="-mr-2"
          onClick={copyInviteLink}
          disabled={clipboardCopied}
        >
          {clipboardCopied ? (
            <Check className="size-5 transition-all animate-out" />
          ) : (
            <Copy className="size-5 transition-all animate-out" />
          )}
        </IconButton>
        {clipboardCopied && (
          <div className="absolute bottom-full left-3/4 transform -translate-x-1/2 mb-2 opacity-100 transition-opacity duration-300 bg-gray-700 text-white text-xs rounded py-1.5 px-2 w-28 flex items-center justify-center">
            <span className="text-center">Link copiado!</span>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-700" />
          </div>
        )}
      </div>
    </InputRoot>
  );
}
