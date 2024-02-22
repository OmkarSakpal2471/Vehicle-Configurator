using System;
using System.Collections.Generic;

namespace Vehicle_Configurator.DbRepos;

public partial class SegmentMaster
{
    public int SegId { get; set; }

    public string? SegName { get; set; }

    public virtual ICollection<MfgMaster> MfgMasters { get; } = new List<MfgMaster>();

    public virtual ICollection<ModelMaster> ModelMasters { get; } = new List<ModelMaster>();
}
