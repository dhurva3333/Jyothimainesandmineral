insert into storage.buckets(id,name,public) values('product-images','product-images',true),('documents','documents',false) on conflict(id) do nothing;
create policy "public read product images" on storage.objects for select using(bucket_id='product-images');
create policy "admins manage product images" on storage.objects for all using(bucket_id='product-images' and public.is_admin()) with check(bucket_id='product-images' and public.is_admin());
create policy "admins manage documents" on storage.objects for all using(bucket_id='documents' and public.is_admin()) with check(bucket_id='documents' and public.is_admin());
