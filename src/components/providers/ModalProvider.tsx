'use client'

import { useEffect, useState } from 'react'

import { CreateServerModal } from '@/components/modals/CreateServerModal'
import { InviteModal } from '@/components/modals/InviteModal'
import { EditServerModal } from '@/components/modals/EditServerModal'
import { MembersModal } from '@/components/modals/MambersModal'
import { CreateChannelModal } from '@/components/modals/CreateChannelModal'
import { LeaveServerModal } from '@/components/modals/LeaveServerModal'
import { DeleteServerModal } from '@/components/modals/DeleteServerModal'
import { DeleteChannelModal } from '@/components/modals/DeleteChannelModal'
import { EditChannelModal } from '@/components/modals/EditChannelModal'
import { MessageFileModal } from '@/components/modals/MessageFileModal'
import { DeleteMessageModal } from '@/components/modals/DeleteMessageModal'

export function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <CreateChannelModal />
      <CreateServerModal />
      <DeleteChannelModal />
      <DeleteMessageModal />
      <DeleteServerModal />
      <EditChannelModal />
      <EditServerModal />
      <InviteModal />
      <LeaveServerModal />
      <MembersModal />
      <MessageFileModal />
    </>
  )
}
