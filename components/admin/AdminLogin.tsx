'use client'
import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { createSupabaseBrowserClient } from '../../lib/supabase/browser'

export function AdminLogin(){const router=useRouter();const[email,setEmail]=useState('');const[password,setPassword]=useState('');const[message,setMessage]=useState('');const submit=async(e:FormEvent)=>{e.preventDefault();const supabase=createSupabaseBrowserClient();const{error}=await supabase.auth.signInWithPassword({email,password});if(error)setMessage(error.message);else router.push('/admin')};return <form className="admin-login" onSubmit={submit}><p className="eyebrow dark">ADMIN</p><h1>Sign in to the CMS</h1><label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></label><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></label><button className="gold-button">Sign in →</button>{message&&<p className="error-text">{message}</p>}<p className="form-note">Supabase Auth is required. Never place service-role keys in the browser.</p></form>}
