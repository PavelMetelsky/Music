﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Piano.Entities.Session;

namespace Piano.Entities.Mappings.Sessions;

public class SessionAttachmentMap : IEntityTypeConfiguration<SessionAttachment>
{
    public void Configure(EntityTypeBuilder<SessionAttachment> builder)
    {
        builder.ToTable("SessionAttachments");
        builder.HasKey(a => a.Id)
               .HasName("Id");
        builder.Property(a => a.Type)
               .HasColumnName("Type")
               .HasConversion<int>();
        builder.Property(a => a.Data)
               .HasColumnName("Data");
        builder.HasOne(a => a.Session)
               .WithMany(s => s.Attachments)
               .OnDelete(DeleteBehavior.Cascade)
               .HasForeignKey("SessionId");
    }
}